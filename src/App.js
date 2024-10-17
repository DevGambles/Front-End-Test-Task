import './App.css';
import { noteLabel } from './constants';
import { useEffect, useState } from 'react';
import Form1 from './views/Form1';
import Form2 from './views/Form2';
import NoteSection from './views/NoteSection';
import axios from 'axios';

function App() {
  const [noteVisible, setNoteVisible] = useState(true);
  const [user, setUser] = useState(null);
  const [formVisible, setFormVisible] = useState(true);
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    checked1: false,
    checked2: false
  });

  const handleFormChange = (e) => {
    console.log(e.target.type);
    if (e.target.type == 'checkbox') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  }

  const submitForm = () => {
    axios.post('/form', user.group_id == 1 ? {
      field1: formData.field1,
      field2: formData.field2
    } : {
      checked1: formData.checked1,
      checked2: formData.checked2,
      field1: formData.field1
    });
  }

  useEffect(() => {
    const fetchUser = async () => {
      // fetch current user
      // const user = await axios.get('/me');
      const user = {
        group_id: 1,
        // other info
      };
      setUser(user);
    }
    fetchUser();
  }, []);

  return (
    <div className="App">
      {user ?
        <header className="App-header">
          <div className='flex gap-4 flex-row container'>
            {formVisible ? (user.group_id == 1 ?
              <Form1 onClose={() => setFormVisible(false)} formData={formData} onChange={handleFormChange} /> :
              <Form2 onClose={() => setFormVisible(false)} formData={formData} onChange={handleFormChange} />) :
              <div className='w-2/3'></div>
            }
            {noteVisible &&
              <div className='w-1/3'>
                <NoteSection onClose={() => setNoteVisible(false)}>
                  <div className='border rounded-md border-gray-400'>{noteLabel}</div>
                </NoteSection>
              </div>
            }
          </div>
          <div className='container flex justify-center mt-6'>
          <button onClick={() => submitForm()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
          </div>
        </header> :
        <div>Loading...</div>
      }
    </div>
  );
}

export default App;
