class MyArray {
  [Symbol.iterator]() {
    const max = 123;
    let value = 0;

    return {
      next() {
        if (value < max) {
          value += 1;
          return {
            value,
            done: false,
          };
        }

        return {
          done: true,
        };
      }
    }
  }
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  document.write("<h1>Iterator in JS</h1>");
  document.write('<div class="table">');
  for (const i of new MyArray()) {
    document.write("<p>" + i + "</p>");
  }
  document.write("</div>")

} else {
  console.log("Iterator in JS");
  const rowWidth = 5;
  let counter = 1;

  let buffer = "";

  for (const i of new MyArray()) {
    buffer += `${i} `;

    if (counter % Math.abs(rowWidth) === 0) {
      console.log(buffer);
      buffer = "";
    }

    counter++;
  }

  if (buffer.length > 0) {
    console.log(buffer);
  }
}

  