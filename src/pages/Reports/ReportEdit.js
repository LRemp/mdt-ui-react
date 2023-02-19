import React, { useContext, useState, useEffect } from 'react';
import { format } from 'date-fns';
import Collapsible from '../../components/Collapsible';
import DataContext from '../../providers/data';
import { updateReport } from '../../api/reports';

import useApi from '../../hooks/useApi';

const ReportEdit = ({
  id,
  title,
  time,
  author,
  offender,
  details,
  notes,
  charges: activeCharges,
  editHistory,
  onSave,
  onEditCancel,
}) => {
  const api = useApi();
  const [newData, setNewData] = useState(activeCharges != null ? activeCharges.map((x) => { return {...x} }) : []);
  const { chargeCategories } = useContext(DataContext);
  const [newTitle, setNewTitle] = useState(title);
  const [newDetails, setNewDetails] = useState(details);
  const [newNotes, setNewNotes] = useState(notes);
  const [totalFine, setTotalFine] = useState("---");
  const [totalSentence, setTotalSentence] = useState("---");
  const [chargesEl, setCharges] = useState(<></>);
  const [valuesUpdated, setValuesUpdated] = useState(Date.now());
  const [finalFine, setFinalFine] = useState(0);
  const [finalSentence, setFinalSentence] = useState(0);

  const btnUpdateReport = async () => {
    const reportChanges = {
      id: id,
      title: newTitle,
      details: newDetails,
      notes: newNotes,
      charges: [...newData],
      outcome: {
        totalFine: finalFine,
        totalSentence: finalSentence,
      }
    }
    await api(updateReport(reportChanges));
    onSave(reportChanges);
  }

  const incrementCharge = (id) => {
    let newValues = [...newData];
    for(let i = 0; i < newValues.length; i++){
      if(newValues[i].id === id) newValues[i].times++;
    }
    setNewData([...newValues])
    setValuesUpdated(Date.now());
  }

  const decrementCharge = (id) => {
    let newValues = [...newData];
    for(let i = 0; i < newValues.length; i++){
      if(newValues[i].id === id) {
        newValues[i].times--;
        if(newValues[i].times <= 0) {
          newValues.splice(i, 1);
        }
      }
    }
    setNewData([...newValues])
    setValuesUpdated(Date.now());
  }
  
  useEffect(() => {
    var sum = 0;
    var sentence = 0;
    setCharges(newData.map((data, id) => {
      const charge = getChargeById(data.id);
      sum += charge.fine * data.times;
      sentence += charge.duration * data.times;
      return (
        <div className="ReportEdit__charge tooltip">
          {charge.name}
          <br />${charge.fine * data.times} | {format(charge.duration * data.times, 'H')} months
          <div className="ReportCharge__buttons">
          
            <button className="ReportCharge__add" onClick={() => incrementCharge(data.id)}>
              <i className="fas fa-plus" />
            </button>
            <span className="">{data.times}</span>
            <button className="ReportCharge__remove" onClick={() => decrementCharge(data.id)}>
              <i className="fas fa-minus" />
            </button>
          </div>
          <span className="tooltiptext">
            {charge.description}
          </span>
        </div>
      )
    }));

    setTotalSentence(parseInt(sentence/60));
    setTotalFine(sum);
  }, [valuesUpdated])

  const addCharge = (id) => {
    let newValues = [...newData];
    let success = false;
    for(let i = 0; i < newValues.length; i++){
      if(newValues[i].id === id) {
        success = true;
        newValues[i].times++;
      } 
    }
    if(!success){
      newValues.push({
        id: id,
        times: 1, 
      })
    }
    setNewData([...newValues])
    setValuesUpdated(Date.now());
  }

  const getChargeById = (idToFind) => {
    for (const { charges } of chargeCategories) {
      const charge = charges.find(({ id }) => id === idToFind);

      if (charge) {
        return charge;
      }
    }
  };

  return (
    <div className="ReportEdit">
      <div onClick={onEditCancel} className="ReportView__back">
        <i className="fas fa-arrow-circle-left"></i> Back
      </div>
      <div className="Reports__title">You are editing a Report</div>
      <br />
      <div
        className="ReportEdit__required-fields"
        style={{ 'font-size': '1.2vh', color: 'darkred' }}
      >
        * required fields
      </div>
      <br />

      <input
        type="text"
        className="ReportEdit__input"
        placeholder="Report Title*"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
      />
      <button className="ReportEdit__edit-button" onClick={btnUpdateReport}>Save Report</button>
      <div className="ReportEdit__grid">
        <div className="ReportEdit__grid-time">
          <span className="ReportEdit__label">Time</span>
          <br />
          <br />
          {format(time || 0, 'dd/MM/yyyy, H:mm')}
        </div>
        <div className="ReportEdit__grid-author">
          <span className="ReportEdit__label">Author</span>
          <br />
          <br />
          {author}
        </div>
        <div className="ReportEdit__grid-accused">
          <span className="ReportEdit__label">Accused</span>
          <br />
          <br />
          {offender}
        </div>
        <div className="ReportEdit__grid-id">
          <span className="ReportEdit__label">Report ID</span>
          <br />
          <br />#{id}
        </div>
        <div className="ReportEdit__grid-details">
          <span className="ReportEdit__label">Report Details*</span>
          <br />
          <br />
          <textarea className="ReportEdit__textarea" defaultValue={details} onChange={(e) => setNewDetails(e.target.value)} />
          <span className="ReportEdit__label">Officer Notes</span>
          <br />
          <br />
          <textarea className="ReportEdit__textarea" defaultValue={notes} onChange={(e) => setNewNotes(e.target.value)} />
        </div>
        <div className="ReportEdit__grid-add-charges">
          <Collapsible title="Add Charges*" className="ReportEdit__label">
            <div style={{ padding: '1vh' }}>
              <div style={{ 'margin-top': '0.5vh', 'margin-bottom': '0.5vh' }}>
                <input
                  className="ReportEdit__input"
                  placeholder="Filter charges"
                />{' '}
                <button
                  className="ReportEdit__edit-button"
                  style={{ float: 'none' }}
                >
                  Filter
                </button>
              </div>
              {chargeCategories.map(({ uid, name, charges }) => (
                <div key={uid} className="Chargesgroup">
                  <div className="ReportEdit__charges-title">{name}</div>
                  {charges.map((charge) => (
                    <div key={charge.id} className="ReportEdit__charge tooltip" onClick={() => addCharge(charge.id)}>
                      {charge.name}
                      <br />${charge.fine} | {format(charge.duration, 'H')}{' '}
                      months
                      <span className="tooltiptext">{charge.description}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Collapsible>
        </div>
        <div className="ReportEdit__grid-selected-charges">
          <span className="ReportEdit__label">Selected Charges</span>
          <br /><br />
          {chargesEl} 
        </div>
        <div className="ReportEdit__grid-total-recommended">
          <span className="ReportEdit__label">Total Recommended</span>
          <br/><br/>
          Total Recommended Fine: ${totalFine}
          <br/>
          Total Recommended Sentence: {totalSentence} months
        </div>
        <div className="ReportEdit__grid-final-decision">
          <span className="ReportEdit__label">Final Decision</span>
          <br/>
          <br/>
          Final Fine: $ <input className="ReportEdit__finalinput" placeholder="0*" type="number" onChange={(e) => setFinalFine(e.target.value)} />
          <br/>
          Final Sentence: <input className="ReportEdit__finalinput" placeholder="0*" type="number" onChange={(e) => setFinalSentence(e.target.value)} />{' '}
          months
        </div>
      </div>
    </div>
  );
};

export default ReportEdit;
