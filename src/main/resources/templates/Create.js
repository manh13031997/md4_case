function create() {

    let content = ""
    content += `<H1 class="btn btn-secondary">Tạo mới nhân viên</H1>
<form>
    <table>
        <tr>
            <td><label>Nhập vào tên sinh viên</label></td>
            <td><input type="text" name="name" id="name" required></td>
        </tr>
        <tr>
            <td><label>Nhập tuổi nhân viên</label></td>
            <td><input type="text" name="age" id="age" required></td>
        </tr>
        <tr>
            <td><label>nhập lương</label></td>
            <td><input type="text" name="salary" id="salary" required></td>
        </tr>
        <tr>
            <td><label>Chọn phòng ban</label></td>
            <td>
                <select id="department_id" name="department_id" required></select>
            </td>
        </tr>
    </table>
</form>
<button class="btn btn-success" onclick="Goback()">go back to home</button>
<button class="btn btn-success" onclick="createPost()">Create</button>
`
    document.getElementById("display").innerHTML = content;
    loadDepartment();
}

function loadDepartment(){
    axios.get("http://localhost:8080/api/departments").then((data) => {
        let department = data.data;
        let content="<Option></Option>";
        for (let i = 0; i <department.length ; i++) {
            content+=`<Option value="${department[i].id}">${department[i].name}</Option>`
        }
      document.getElementById("department_id").innerHTML=content;
    })
}
function Goback(){
    showlist();
}


function createPost(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let salary = document.getElementById("salary").value;
    let department_id = document.getElementById("department_id").value;

    let staff={
        name:name,
        age:age,
        salary:salary,
        department:{
            id:department_id
        }
    }
    let url = "http://localhost:8080/api/staffs";
    axios.post("http://localhost:8080/api/staffs",staff).then((res) => {
        alert("Thêm nhân viên thành công");
        showlist();

    })

}


