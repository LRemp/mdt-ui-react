import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/markdown/markdown';
import Button from '../../elements/Button';
import useApiResult from '../../hooks/useApiResult';
import useApi from '../../hooks/useApi';
import { updateBulletin, getBulletin } from '../../api/bulletin';

const Bulletin = () => {
  const api = useApi();
  const { result: bulletinText } = useApiResult(() => getBulletin(), []);

  const [text, setText] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setText(bulletinText);
  }, [bulletinText]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    await api(updateBulletin(text));

    setIsEditing(false);
  };

  const handleTextChange = (editor, data, value) => {
    setText(value);
  };

  return (
    <>
      {isEditing ? (
        <div className="Bulletin__edit">
          <CodeMirror
            className="Bulletin__textarea"
            value={text}
            options={{
              mode: 'markdown',
            }}
            onBeforeChange={handleTextChange}
          />
          <br />
          <Button onClick={handleSaveClick}>Save</Button>
        </div>
      ) : (
        <>
          <Button className="Bulletin__edit-button" onClick={handleEditClick}>
            Edit
          </Button>
          <Markdown className="Bulletin" plugins={[gfm]}>
            {text}
          </Markdown>
        </>
      )}
    </>
  );
};

export default Bulletin;
