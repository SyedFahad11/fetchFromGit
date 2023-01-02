
var prev = "";
var salary="Persons with salary>5LPA are: <br>";
var doj="Persons joined in December are: <br>";
fetch("https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json")
    .then((res) => {
        return res.json();
    }).then((data) => {
        for (var i = 0; i < data.Employees.length; i++) {
            const obj = data.Employees[i];
            prev += "<tr><td class='trc'>" + obj.Name + "</td>";
            prev += "<td>" + obj.Address + "</td>";
            prev += "<td>" + obj.Salary + "</td>";
            prev += "<td>" + obj.DateOfJoining + "</td></tr>";
            document.querySelector("tbody").innerHTML = prev
            console.log(obj);
            if(obj.Salary >50000){
                salary+=obj.Name;
                document.querySelector('.sal').innerHTML=salary;
                salary+=" ,";
            }
            if(obj.DateOfJoining[3] =='1' && obj.DateOfJoining[4] =='2'){
                doj+=obj.Name;
                document.querySelector('.doj').innerHTML=doj;
                doj+=' ,';
            }
            console.log(obj);
        }
        
    });
document.querySelector("thead").style.color = "blue"

