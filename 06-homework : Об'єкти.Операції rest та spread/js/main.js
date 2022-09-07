    const STUDENTS = [{
        name: "Tanya",
        course: 3,
        subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
        }
    }, {
        name: "Victor",
        course: 4,
        subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
        }
    }, {
        name: "Anton",
        course: 2,
        subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
        }
    }];

    // Намагаємося повернути список предметів для конкретного студента. 

    const getSubjects = (STUDENTS) => {
        let someArray = Object.keys(STUDENTS.subjects)
        let studentsSubject = [];
    for (let i = 0; i < someArray.length; i++) {
        studentsSubject.push((someArray[i].charAt(0).toUpperCase() + someArray[i].slice(1)).replaceAll("_", " "));
    }
        return studentsSubject;
    };

    console.log(`1. Список предметів для окремого студента ${STUDENTS[1].name}:`, getSubjects(STUDENTS[1]));

    // Функція яка поверне середню оцінку по усім предметам для переданого студента.

    const getAverageMark = (el) => {
        let marksArray = Object.values(el.subjects).flatMap(el => el);
        let averageMark = Number((marksArray.reduce((sum, current) => sum + current) / marksArray.length));

        return (averageMark).toFixed(2);
    };

    console.log(`2. Cередня оцінка по усім предметам для переданого студента ${STUDENTS[0].name}:`, getAverageMark(STUDENTS[0]));

    // Функція яка повертає інформацію загального виду по переданому студенту.

    const getStudentInfo = (obj) => {
        let averageMark = getAverageMark(obj);
        
        return {
            name: obj.name,
            course: obj.course,
            averageMark: averageMark,
        };
    }

    console.log(`3. Інформація загального виду по переданому студенту:`, getStudentInfo(STUDENTS[1]));

    // Функція, яка повертає імена студентів у алфавітному порядку.

    const getStudentsNames = (arr) => {
        return arr.map (el => el.name).sort();
    }

    console.log(`4. Повертаємо імена студентів у алфавітному порядку:`, getStudentsNames(STUDENTS));

    // Функція, яка повертає кращого студента зі списку по показнику середньої оцінки.

    const getBestStudent = (students) => {
    
    let topMark = getAverageMark(students[0]);
    let topStudent = students[0].name;
    
    for (let i = 0; i < students.length; i++) {
        while (getAverageMark(students[i]) > topMark) {
            topMark = getAverageMark(students[i]);
            topStudent = students[i].name
        }
        }
        return topStudent;
    }
    console.log(`5. Знаходимо кращого студента зі списку по показнику середньої оцінки:`, getBestStudent(STUDENTS));

    // Функція, яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

    const  calculateWordLetters = (str) =>{
    
    const randomeArray = [];
    let counter = {};
    
    for (let i = 0; i < str.length; i++) {
        randomeArray[i] = str[i];
        }
        randomeArray.forEach((item) => {
            counter[item] = ((counter[item] || 0) + 1);
        });
            return counter;
        }

    console.log(`6. Повертаємо обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.:`, calculateWordLetters('BUKASHKA'));