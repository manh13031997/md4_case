function showlist(){
    axios.get("http://localhost:8080/api/staffs").then((data) => {
        let content = "";
        content += `<table style="width: 100%">
                <tr>
                 <td class="td">Stt</td>
                 <td class="td">Tên nhân viên</td>
                  <td class="td">Tuôi</td>
                  <td class="td">Lương </td>
                  <td class="td">Phòng ban</td>
                </tr>`
        for (let i = 0; i < data.data.length; i++) {
            content += `<tr>
            <td><label> ${i + 1} </label></td>
            <td class="td"><label> ${data.data[i].name} </label></td>
            <td class="td"><label> ${data.data[i].age}</label></td>
            <td class="td"><label> ${data.data[i].salary}</label></td>
            <td class="td"><label> ${data.data[i].department.name}</label></td>
            <td class="td"><button onclick="updateStaff(${data.data[i].id})">update</button></td>
            <td class="td"><button onclick="deleteStaff(${data.data[i].id})">delete</button></td>
            <td class="td"><button onclick="viewDetail(${data.data[i].id})">Xem Nhân Viên</button></td>
            </tr>`
        }
        content += `</table>`
        document.getElementById("display").innerHTML = content
    })
}

function deleteStaff(id){
    let a = confirm("are you sure???")
    if(a==true){
        axios.delete(`http://localhost:8080/api/staffs/${id}`).then((data) => {
          alert("Xóa thành công!!!")
            showlist();
        })
    } else{
        alert("not found!")
    }

}

function search() {
    let name = document.getElementById("search").value;
    let staff = {
        name: name
    }
    axios.post(`http://localhost:8080/api/staffs/search`, staff).then((data) => {
        let staff = data.data;
        let content = "";
        content += `<table style="width: 100%>
                <tr>
                 <td class="td">Stt</td>
                 <td class="td">Tên nhân viên</td>
                  <td class="td">Tuôi</td>
                  <td class="td">Lương </td>
                  <td class="td">Phòng ban</td>
                </tr>`
        for (let i = 0; i < data.data.length; i++) {
            content += `<tr>
            <td><label> ${i + 1} </label></td>
            <td class="td"><label> ${data.data[i].name} </label></td>
            <td class="td"><label> ${data.data[i].age}</label></td>
            <td class="td"><label> ${data.data[i].salary}</label></td>
            <td class="td"><label> ${data.data[i].department.name}</label></td>
            <td class="td"><button onclick="updateStaff(${data.data[i].id})">update</button></td>
            <td class="td"><button onclick="deleteStaff(${data.data[i].id})">delete</button></td>
              <td class="td"><button onclick="viewDetail(${data.data[i].id})">Xem Nhân Viên</button></td>
            </tr>`
        }
        content += `</table>`
        document.getElementById("display").innerHTML = content
    })
}

function sortI(){
    axios.get(`http://localhost:8080/api/staffs/sortI`).then((data) => {
        let staff = data.data;
        let content = "";
        content += `<table style="width: 100%>
                <tr>
                 <td class="td">Stt</td>
                 <td class="td">Tên nhân viên</td>
                  <td class="td">Tuôi</td>
                  <td class="td">Lương </td>
                  <td class="td">Phòng ban</td>
                </tr>`
        for (let i = 0; i < data.data.length; i++) {
            content += `<tr>
            <td><label> ${i + 1} </label></td>
            <td class="td"><label> ${data.data[i].name} </label></td>
            <td class="td"><label> ${data.data[i].age}</label></td>
            <td class="td"><label> ${data.data[i].salary}</label></td>
            <td class="td"><label> ${data.data[i].department.name}</label></td>
            <td class="td"><button onclick="updateStaff(${data.data[i].id})">update</button></td>
            <td class="td"><button onclick="deleteStaff(${data.data[i].id})">delete</button></td>
            <td class="td"><button onclick="viewDetail(${data.data[i].id})">Xem Nhân Viên</button></td>
            </tr>`
        }
        content += `</table>`
        document.getElementById("display").innerHTML = content
    })
}

function sortD(){
    axios.get(`http://localhost:8080/api/staffs/sortD`).then((data) => {
        let staff = data.data;
        let content = "";
        content += `<table style="width: 100%>
                <tr>
                 <td class="td">Stt</td>
                 <td class="td">Tên nhân viên</td>
                  <td class="td">Tuôi</td>
                  <td class="td">Lương </td>
                  <td class="td">Phòng ban</td>
                </tr>`
        for (let i = 0; i < data.data.length; i++) {
            content += `<tr>
            <td><label> ${i + 1} </label></td>
            <td class="td"><label> ${data.data[i].name} </label></td>
            <td class="td"><label> ${data.data[i].age}</label></td>
            <td class="td"><label> ${data.data[i].salary}</label></td>
            <td class="td"><label> ${data.data[i].department.name}</label></td>
            <td class="td"><button onclick="updateStaff(${data.data[i].id})">update</button></td>
            <td class="td"><button onclick="deleteStaff(${data.data[i].id})">delete</button></td>
            <td class="td"><button onclick="viewDetail(${data.data[i].id})">Xem Nhân Viên</button></td>
            </tr>`
        }
        content += `</table>`
        document.getElementById("display").innerHTML = content
    })
}
function viewDetail(id) {
    axios.get(`http://localhost:8080/api/staffs/${id}`).then((data) => {
        let staff = data.data;
        let content = "";
        content += `<table border="1 solid">
<tr>
    <td rowspan="4" ><image style="width: 600px; height: 600px" ></image></td>
    <td style="width: 50%; margin: 30px; align-content: center; text-align: center">${staff.name}</td>
</tr>
<tr>
    <td style="margin: 30px; align-content: center; text-align: center">${staff.age}</td>
</tr>
<tr>
    <td style="margin: 30px; align-content: center; text-align: center">${staff.salary}</td>
</tr>
<tr>
    <td style="margin: 30px; align-content: center; text-align: center">${staff.department.name}</td>
</tr>
</table>
 `
        document.getElementById("display").innerHTML=content;
    })
}