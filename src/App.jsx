import './App.css'
import HookForm from './component/HookForm/HookForm'
import RefForm from './component/RefForm/RefForm'
import ReusableForm from './component/ReusableForm/ReusableForm'
import SimpleForm from './component/SimpleForm/SimpleForm'
import StatefulForm from './component/StatefulForm/StatefulForm'

function App() {

  const handleSignUpSubmit = data => {
        console.log('Submit Data', data);
    }
  const handleProfileUpdate = data => {
        console.log('Update Data', data);
    }
  return (
    <>
      <h1 className='text-center my-6'>Master Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div className="text-cyan-600 text-center mb-4">
          <h1>Sign Up :</h1>
          <h5>Please Sign Up First.</h5>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleProfileUpdate} submitBtnText='Update'>
        <div className="text-cyan-600 text-center mb-4 mt-6">
          <h1>Updated :</h1>
          <h5>Please Keep Updated Your Profile.</h5>
        </div>
      </ReusableForm>
      
    </>
  )
}

export default App
