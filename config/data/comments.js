let comment = [
    {
      "showId": "636fef9d0aa79a19f71a6a32",
      "comment": "¡I love it!",
      "userId": "636d88b4376f4bce491f0bcf",
      "date": "2022-12-12"
    },
    {
      "showId": "636fef9d0aa79a19f71a6a32",
      "comment": "I don't like it",
      "userId": "636d88b4376f4bce491f0bcf",
      "date": "2022-12-15"
    },
    {
      "showId": "636fef9d0aa79a19f71a6a32",
      "comment": "Wiii",
      "userId": "636d88b4376f4bce491f0bcf",
      "date": "2023-05-01"
    },
    {
      "showId": "636fef9d0aa79a19f71a6a35",
      "comment": "Sorry i didn't like it at all",
      "userId": "636d883b376f4bce491f0bcd",
      "date": "2023-04-12"
    },
    {
      "showId": "636fef9d0aa79a19f71a6a31",
      "comment": "¡Amazing!",
      "userId": "636d8820376f4bce491f0bcb",
      "date": "2023-05-15"
    },
    {
      "showId": "63830ee6d4aa2a200107e57f",
      "comment": "Nice!",
      "userId": "6380f09f4083adb4a54c7c29",
      "date": "2023-08-12"
    },
  
  ]
  
  require("dotenv").config();
  require("../database");
  const Comment = require("../../models/Comment");
  
  comment.forEach((element) => {
    Comment.create(
      {
        showId: element.showId,
        comment: element.comment,
        date: element.date,
        userId: element.userId
      }
    )
  })