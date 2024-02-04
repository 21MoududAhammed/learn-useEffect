import MyInput from "./components/challenge2";


export default function App(){
    return (
      <>
      <MyInput shouldFocus={true}/>
      <br /><br />
      <MyInput shouldFocus={false}/>
      </>
    );
}