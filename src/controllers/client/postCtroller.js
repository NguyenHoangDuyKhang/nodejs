const post = [
    {
      id: 1,
      title: "Tên Tiêu đề Bài Viết Về Sách 1",
      author: "Tên Tác Giả 1",
      publication_date: "Ngày Xuất Bản 1",
    },
    {
      id: 2,
      title: "Tên Tiêu đề Bài Viết Về Sách 2",
      author: "Tên Tác Giả 2",
      publication_date: "Ngày Xuất Bản 2",
    },
    {
      id: 3,
      title: "Tên Tiêu đề Bài Viết Về Sách 3",
      author: "Tên Tác Giả 3",
      publication_date: "Ngày Xuất Bản 3",
    },
    {
      id: 4,
      title: "Tên Tiêu đề Bài Viết Về Sách 4",
      author: "Tên Tác Giả 4",
      publication_date: "Ngày Xuất Bản 4",
    },
    {
      id: 5,
      title: "Tên Tiêu đề Bài Viết Về Sách 5",
      author: "Tên Tác Giả 5",
      publication_date: "Ngày Xuất Bản 5",
    },
  ];
  

  const GetPost =  (req, res) => {
    res.render("client/post.ejs", {post});
  }

  module.exports = {GetPost}