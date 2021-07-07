import React, { useState } from 'react';
import Header from './Header';
import FAQ from './FAQ';
function App() {
  const [faqs, setfaqs] = useState([
  {
    question: 'Question number 0',
    answer: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    open: false

  },
  {
    question: 'Question number 1',
    answer: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    open: false

  },
  {
    question: 'Question number 2',
    answer: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    open: false

  },
  {
    question: 'Question number 3',
    answer: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    open: false

  },
  {
    question: 'Question number 4',
    answer: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    open: false

  },
  {
    question: 'Question number 5',
    answer: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    open: false

  },
  {
    question: 'Question number 6',
    answer: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    open: false

  },
  {
    question: 'Question number 7',
    answer: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    open: false

  },
  {
    question: 'Question number 8',
    answer: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    open: false

  },
  {
    question: 'Question number 9',
    answer: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    open: false

  }]);
  function toggleFaq(index){
    setfaqs(faqs.map((faq,i) => {
if(i===index){
 faq.open = !faq.open 
}else{
  faq.open = false;
}
return faq;
    }))
  }


  return (
    <div className="App">
        <Header />
        <div className="faqs">
          {faqs.map((faq,i) => (
            <FAQ faq={faq} index={i}  toggleFAQ={toggleFaq}/>
           
          ))}
        </div>
    </div>
  );
}

export default App;
