import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../Security/axiosWithAuth";


// Component purpose: Pull from backend, map over it, send each individual question to another component

function Test(props) {
    let answerURL = `https://nihongo2go.herokuapp.com/quiz/allanswers`
    let questionURL = `https://nihongo2go.herokuapp.com/quiz/allquestions`
    let getAnswers = axiosWithAuth().get(answerURL)
    let getQuestions = axiosWithAuth().get(questionURL)
    const [axiosData, setAxiosData] = userState()
  const [questionData, setQuestionData] = useState();
  const [answerData, setAnswerData] = useState();


//   axios.all([
//     axios.get('http://google.com'),
//     axios.get('http://apple.com')
//   ])
//   .then(axios.spread((googleRes, appleRes) => {
//     // do something with both responses
//   }));


  // Pull in data from backend, set it into a hook
  useEffect(() => {

    // axiosWithAuth()
    //   .all([
    //       getAnswers, getQuestions
    //     ])
    //   .then(axiosWithAuth().spread((...responses)=>{
    //       const getAnswers = responses[0]
    //       const getQuestions = responses[1]
    //   }))
    //   .catch(err=>console.log("error: ", err))
  }, []);

  // 4 renders:
//   function App() {
//     const [data, setData] = useState(null);
//     const [repos, setRepos] = useState(null);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         const respGlobal = await axios(`https://api.github.com/users/${username}`);
//         const respRepos = await axios(`https://api.github.com/users/${username}/repos`);
  
//         setData(respGlobal.data);
//         setRepos(respRepos.data);
//       };
  
//       fetchData()
  
//     }, []);
  
//     if (data) {
//       console.log(data, repos);
//     }
  
//     return (<h1>Hello</h1>)
//   }

  // One render: 
//   function App() {
//     const [resp, setGitData] = useState({ data: null, repos: null });
  
//     useEffect(() => {
//       const fetchData = async () => {
//         const respGlobal = await axios(
//           `https://api.github.com/users/${username}`
//         );
//         const respRepos = await axios(
//           `https://api.github.com/users/${username}/repos`
//         );
  
//         setGitData({ data: respGlobal.data, repos: respGlobal.data });
//       };
  
//       fetchData();
//     }, []);
  
//     console.log('render');
//     if (resp.data) {
//       console.log("d", resp.data, resp.repos);
//     }
  
//     return <h1>Hello</h1>;
//   }

  return (
    <div>
        <h1>Done</h1>
      {/* {console.log("res1", getAnswers)}
      {console.log("res2", getQuestions)}
      {getQuestions ? (<h1>Done</h1>, console.log(getQuestions)) : (<h1> Loading, please wait</h1>)} */}

    </div>
  );
}

export default Test;
