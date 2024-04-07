
let name = 'Ayush';

function CheckEvenOrOdd(num){
  if (num % 2 === 0){
   return "Even";
  } 
  else {
    return "Odd";
  }
  

}
 
function CheckAlphabet(char) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return <div>Vowel</div>
      default:
        return <div>Not Vowel</div>
    }
  }

let num = 4;

const users = [
  { name: 'Ayush', age: 25 },
  { name: 'Ram', age: 24 },
  { name: 'Anuj', age: 21 }
];

function Jsx() {
  return (
    <div className="App">
      <h2>Hello {name}</h2>
      <div>
        {CheckEvenOrOdd(5)}
        {
          num % 2 === 0
           ? <div>Even Number</div>
           : <div>Odd Number</div>
        }
        {
          <h3>If Statement</h3>
        }
        {
          num%2 === 0 && <div>Even Number</div>
        }
        {
          num%2 > 0 && <div>Odd Number</div>
        }
      </div>
      <h3>Loop</h3>
      {
      users.map((item, index) => <div key={index}>{item.name} - {item.age}</div>)
      }

      <h3>switch</h3>
    {
      CheckAlphabet('z')
    }
    </div>
  );
}
   
export default Jsx;

export function Greet() {
    <div>Greet</div>
}