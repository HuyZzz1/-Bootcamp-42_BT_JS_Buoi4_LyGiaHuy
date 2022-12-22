//Bài tập 1: xuất 3 số theo thứ tự tăng dần
document.getElementById("submit").onclick = function () {
  // Input: 3 số  nguyên
  let number_1 = +document.getElementById("number_1").value;
  let number_2 = +document.getElementById("number_2").value;
  let number_3 = +document.getElementById("number_3").value;

  //Output: In ra kết quả sắp xếp của 3 số theo thứ tự tăng dần
  if (number_1 < number_2) {
    if (number_2 < number_3) {
      document.getElementById(
        "message"
      ).innerHTML = `${number_1}, ${number_2}, ${number_3}`;
    } else if (number_3 < number_1) {
      document.getElementById(
        "message"
      ).innerHTML = `${number_3}, ${number_1}, ${number_2}`;
    } else {
      document.getElementById(
        "message"
      ).innerHTML = `${number_1}, ${number_3}, ${number_2}`;
    }
  } else {
    if (number_3 < number_2) {
      document.getElementById(
        "message"
      ).innerHTML = `${number_3}, ${number_2}, ${number_1}`;
    } else if (number_1 < number_3) {
      document.getElementById(
        "message"
      ).innerHTML = `${number_2}, ${number_1}, ${number_3}`;
    } else {
      document.getElementById(
        "message"
      ).innerHTML = `${number_2}, ${number_3}, ${number_1}`;
    }
  }
};

//Bài tập 2: Chào hỏi các thành viên trong gia đình

document.getElementById("submit_2").onclick = function () {
  //Input: giá trị người dùng chọn để thể hiện lời chào
  let choose = document.getElementById("choose").value;

  //Output: In ra kết quả lời chào hỏi dựa vào giá trị người dùng chọn
  switch (choose) {
    case "father":
      document.getElementById("message_2").innerHTML = `Xin chào Bố`;
      break;
    case "mother":
      document.getElementById("message_2").innerHTML = `Xin chào Mẹ`;
      break;
    case "brother":
      document.getElementById("message_2").innerHTML = `Xin chào Anh trai`;
      break;
    case "sister":
      document.getElementById("message_2").innerHTML = `Xin chào Em gái`;
      break;
    default:
      document.getElementById("message_2").innerHTML = `Xin chào người lạ hihi`;
  }
};

// Bài tập 3: Cho 3 số  nguyên xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn
document.getElementById("submit_3").onclick = function () {
  // //Input: 3 số  nguyên
  let number1 = +document.getElementById("number1").value;
  let number2 = +document.getElementById("number2").value;
  let number3 = +document.getElementById("number3").value;

  //Output: Xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn
  let count = 0;
  if (number1 === 0 && number2 === 0 && number3 === 0) {
    return alert("Dữ liệu không hợp lệ");
  }

  if (number1 % 2 == 0) {
    count++;
  }
  if (number2 % 2 == 0) {
    count++;
  }
  if (number3 % 2 == 0) {
    count++;
  }

  document.getElementById("message_3").innerHTML = `Có ${count} số chẵn và ${
    3 - count
  } số lẻ `;
};

// Bài tập 4: Viết chương trình cho nhập 3 cạnh của tam giác
document.getElementById("submit_4").onclick = function () {
  // //Input: độ dài 3 cạnh
  let a = +document.getElementById("length1").value;
  let b = +document.getElementById("length2").value;
  let c = +document.getElementById("length3").value;

  //Output: cho biết đó là tam giác gì ?

  if (a + b <= c || a + c <= b || b + c <= a) {
    document.getElementById(
      "message_4"
    ).innerHTML = `Dữ liệu không hợp lệ, vui lòng kiểm tra lại`;
  } else if (a == b && b == c) {
    document.getElementById("message_4").innerHTML = `Tam giác đều`;
  } else if (a == b || a == c || b == c) {
    document.getElementById("message_4").innerHTML = `Tam giác cân`;
  } else if (
    a * a + b * b == c * c ||
    a * c + c * c == b * b ||
    b * b + c * c == a * c
  ) {
    document.getElementById("message_4").innerHTML = `Tam giác vuông`;
  } else {
    document.getElementById("message_4").innerHTML = `Một loại tam giác khác`;
  }
};
