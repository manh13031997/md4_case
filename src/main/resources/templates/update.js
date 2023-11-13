function updateStaff(id) {

    let content = ""
    content += `<H1 class="btn btn-secondary">Tạo mới nhân viên</H1>
<form>
    <table>
        <tr>
            <td><label>Nhập vào tên sinh viên</label></td>
            <td><input type="text" name="nameU" id="nameU" required></td>
        </tr>
        <tr>
            <td><label>Nhập tuổi nhân viên</label></td>
            <td><input type="text" name="ageU" id="ageU" required></td>
        </tr>
        <tr>
            <td><label>nhập lương</label></td>
            <td><input type="text" name="salaryU" id="salaryU" required></td>
        </tr>
        <tr>
            <td><label>Chọn phòng ban</label></td>
            <td>
                <select id="department_idU" name="department_idU" required></select>
            </td>
        </tr>
    </table>
</form>
<button class="btn btn-success" onclick="Goback()">go back to home</button>
<button class="btn btn-success" onclick="updatePost(id)">Update</button>
`
    document.getElementById("display").innerHTML = content;
    loadDepartment();

    axios.get(`http://localhost:8080/api/staffs/${id}`).then((data) => {
        let staff=data.data;
        document.getElementById("nameU").value=staff.name;
        document.getElementById("ageU").value=staff.age;
        document.getElementById("salaryU").value=staff.salary;
    })
    loadDepartmentUpdate();
}

function loadDepartmentUpdate(){
    axios.get("http://localhost:8080/api/departments").then((data) => {
        let department = data.data;
        let content="<Option></Option>";
        for (let i = 0; i <department.length ; i++) {
            content+=`<Option value="${department[i].id}">${department[i].name}</Option>`
        }
        document.getElementById("department_idU").innerHTML=content;
    })
}

function updatePost(id){
    let name = document.getElementById("nameU").value;
    let age = document.getElementById("ageU").value;
    let salary = document.getElementById("salaryU").value;
    let department_id = document.getElementById("department_idU").value;

    let staff={
        name:name,
        age:age,
        salary:salary,
        department:{
            id:department_id
        }
    }
    axios.post(`http://localhost:8080/api/staffs/${id}`,staff).then((data) => {
        alert("Cập nhật thành công!!!")
        showlist();
    })
}