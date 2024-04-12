hinh_anh.onchange = evt => {
    const [file] = hinh_anh.files
    if (file) {
      blah.src = URL.createObjectURL(file)
    }
  }



