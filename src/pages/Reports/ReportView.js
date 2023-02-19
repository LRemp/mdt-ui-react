import React, { useContext, useEffect, useState } from 'react';
import { format } from 'date-fns';
import DataContext from '../../providers/data';
import EditHistory from '../../components/EditHistory';

const ReportView = ({
  id,
  title,
  time,
  author,
  offender,
  details,
  notes,
  charges,
  outcome,
  editHistory,
  onEdit,
  onDelete,
  onBack,
}) => {
  const { chargeCategories } = useContext(DataContext);
  const [totalFine, setTotalFine] = useState("---");
  const [totalSentence, setTotalSentence] = useState("---");
  const [chargesEl, setCharges] = useState(<></>);

  useEffect(() => {
    var sum = 0;
    var sentence = 0;
    console.log('^ charges')
    console.log(charges);
    setCharges(charges && charges.length !== 0 ? charges.map((data, id) => {
      const charge = getChargeById(data.id);
      sum += charge.fine * data.times;
      sentence += charge.duration * data.times;
      return (
        <div className="ReportEdit__charge tooltip">
          {charge.name}
          <br />${charge.fine * data.times} | {format(charge.duration * data.times, 'H')} months
          <span className="ReportEdit__times">{data.times}</span>
          <span className="tooltiptext">
            {charge.description}
          </span>
        </div>
      )
    }) : <i>No charges...</i>);

    setTotalSentence(parseInt(sentence / 60));
    setTotalFine(sum);
  }, [])

  const getChargeById = (idToFind) => {
    for (const { charges } of chargeCategories) {
      const charge = charges.find(({ id }) => id === idToFind);

      if (charge) {
        return charge;
      }
    }
  };

  return (
    <div className="ReportView">
      <div onClick={onBack} className="ReportView__back">
        <i className="fas fa-arrow-circle-left"></i> Back
      </div>
      <div className="Reports__title">You are viewing a Report</div>
      <br />
      <span className="ReportView__title">{title ? title : <i style={{ 'font-weight' : 'initial' }}>No title...</i>}</span>
      <span style={{ 'float': 'right' }}>
        <button onClick={onEdit} className="Button">Edit</button>
        <button onClick={onDelete} className="Button">Delete</button>
      </span>
      <div className="ReportView__grid">
        <div className="ReportView__grid-time">
          <span className="ReportView__label">Time</span>
          <br />
          <br />
          {format(time, 'dd/MM/yyyy, HH:mm')}
        </div>
        <div className="ReportView__grid-author">
          <span className="ReportView__label">Author</span>
          <br />
          <br />
          {author}
        </div>
        <div className="ReportView__grid-accused">
          <span className="ReportView__label">Accused</span>
          <br />
          <br />
          {offender}
        </div>
        <div className="ReportView__grid-id">
          <span className="ReportView__label">Report ID</span>
          <br />
          <br />#{id}
        </div>
        <div className="ReportView__grid-details">
          <span className="ReportView__label">Report Details</span>
          <br />
          <br />
          {details || <i>No Report details...</i>}
          <br />
          <br />
          <span className="ReportView__label">Officer Notes</span>
          <br />
          <br />
          {notes || <i>No officer notes...</i>}
        </div>
        <div className="ReportView__grid-charges">
          <span className="ReportView__label">Charges</span>
          <br />
          <br />
          {chargesEl}
        </div>
        <div className="ReportView__grid-total">
          <span className="ReportView__label">Total</span>
          <br />
          <br />
          Total Recommended Fine: ${totalFine}
          <br />
          Total Recommended Sentence: {totalSentence} months
        </div>
        <div className="ReportView__grid-outcome">
          <span className="ReportView__label">Final Outcome</span>
          <br />
          <br />
          Fine: ${outcome.totalFine}
          <br />
          Sentence: {outcome.totalSentence} months
        </div>
      </div>
      <EditHistory data={editHistory} />
    </div>
  );
};

export default ReportView;
