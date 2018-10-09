$(function () {
    const heAssisted = () => Math.random() >= 0.5;
    const getStudents = () => {
        const students = [
            {name: 'Slappy the Frog', attendance: []},
            {name: 'Lilly the Lizard', attendance: []},
            {name: 'Paulrus the Walrus', attendance: []},
            {name: 'Gregory the Goat', attendance: []},
            {name: 'Adam the Anaconda', attendance: []},
        ];
        const NUM_DAYS = 12;

        students.forEach(student => {
            for (let i = 0; i < NUM_DAYS; i++) {
                student.attendance.push(heAssisted());
            }
        });

        return students;
    };

    const model = {
        students: [],
        init() {
            if (!localStorage.students) {
                console.log('Creating students and their attendance records....');
                localStorage.students = JSON.stringify(getStudents());
            }

            this.students = JSON.parse(localStorage.students);
        }
    };

    const octopus = {
        init() {
            model.init();
            view.init();
        },
        getStudents() {
            return model.students;
        }
    };

    const view = {
        init() {
            this.studentTemplate = $('[data-template="student"]').html();
            this.$tBody = $('tbody');

            this.render();
        },
        render() {
            let temp = '';
            octopus.getStudents().forEach(({name, attendance}) => {
                let tempAttendance = '';
                temp += this.studentTemplate.replace('{{name}}', name);
                for (let assisted = 0; assisted < attendance.length; assisted++) {
                    tempAttendance += `<td class="attend-col"><input type="checkbox" ${attendance[assisted] ? 'checked' : ''}></td>`
                }
                temp = temp.replace('{{attendanceList}}', tempAttendance);

                const missedDays = attendance.filter(attend => attend === false).length;

                temp = temp.replace('{{missedDays}}', missedDays);
            });

            this.$tBody.html(temp)
        }
    };


    octopus.init();
});