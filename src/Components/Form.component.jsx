import React, { useState } from "react";

function Form() {
  let [book,setBook] = useState({});
  let [name, setName] = useState();
  let [lname, setLname] = useState();
  let [yearBorn, setYearBorn] = useState();
  let [city, setCity] = useState();
  let [min, setMin] = useState();
  let [past, setPast] = useState();
  let [list, setList] = useState([
    {
      firstName: "keren",
      lastName: "hailu",
      year: 1995,
      city: "yehud",
      min: "nkeva",
      past: "true",
    },
    {
      firstName: "alon",
      lastName: "tal",
      year: 1995,
      city: "yehud",
      min: "nkeva",
      past: "true",
    },
  ]);
// פונקציה גנארית במקום לבשתמש בפונקציה לכל אינפוט
const changeInput = (eve) => {
  book[eve.target.name]= eve.target.value;
};
  // const changeName = (eve) => {
  //   name = eve.target.value;
  // };
  // const changeLName = (eve) => {
  //   lname = eve.target.value;
  // };
  // const changeYear = (eve) => {
  //   yearBorn = eve.target.value;
  // };
  // const changeCity = (eve) => {
  //   city = eve.target.value;
  // };
  // const changeMin = (eve) => {
  //   min = eve.target.value;
  // };
  // const changePast = (eve) => {
  //   past = eve.target.value;
  // };

  const changeAll = () => {
    // setName(name);
    // setLname(lname);
    // setYearBorn(yearBorn);
    // setCity(city);
    // setMin(min);
    // setPast(past);
    setBook(book)
  };
  return (
    <div>
      <br />
      name : <input name='name' type="text" onChange={changeInput} value={name}/>
      <br />
      lname : <input name='lname' type="text" onChange={changeInput} value={lname} />
      <br />
      year : <input name='yearBorn' type="text" onChange={changeInput}value={yearBorn} />
      <br />
      city :<input name='city' type="text" onChange={changeInput} value={city} />
      <br />
      min : <input name='min' type="text" onChange={changeInput} />
      <br />
      past : <input name='past' type="text" onChange={changeInput} />
      <br />
      <button onClick={changeAll}>add</button>
      {/* const newList = [...list];
newList.push({ firstName: fname });
setList(newList); */}

      <p>
        name : {name} ,
        lname : {lname} ,
        year : {yearBorn} ,
        city : {city} , 
        min : {min} ,
        post : {past}
      </p>
      <table>
        <th>
          <tr>name</tr>
          <tr>lname</tr>
          <tr>yearBorn</tr>
          <tr>city</tr>
          <tr>min</tr>
          <tr>past</tr>
        </th>
        <td>
          <tr>{name}</tr>
          <tr>{lname}</tr>
          <tr>{yearBorn}</tr>
          <tr>{city}</tr>
          <tr>{min}</tr>
          <tr>{past}</tr>
        </td>
        <td>
          {list.map(function (item) {
            return (
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.year}</td>
                <td>{item.city}</td>
                <td>{item.min}</td>
                <td>{item.past}</td>
              </tr>
            );
          })}
        </td>
      </table>
    </div>
  );
}
export default Form;
