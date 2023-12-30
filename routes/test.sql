SELECT * FROM students WHERE studentID IN (
    SELECT studentID FROM studentHasCourse WHERE courseID IN (
        SELECT courseID FROM course WHERE courseName = "DB"
    )
)
AND studentID NOT IN (
    SELECT studentID FROM studentHasCourse WHERE courseID IN (
        SELECT courseID FROM course WHERE courseName = "DS"
    )
)