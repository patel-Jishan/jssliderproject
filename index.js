  let slider = [
            {
                Ridername: "Jishan Patel",
                Riderimg: "images/jishan.jpg",
                Bikename: "Royal Enfield Meteor",
                EngineCC: 650,
                bg: "images/metor1.jpg"
            },
            {
                Ridername: "Sanksruti Patel",
                Riderimg: "images/women1.jpg",
                Bikename: "Royal Enfield Himalayan",
                EngineCC: 411,
                bg: "images/himalaya3.jpg"
            },
            {
                Ridername: "Param Patel",
                Riderimg: "images/men3.jpg",
                Bikename: "Royal Enfield Bobber",
                EngineCC: 411,
                bg: "images/bobber.jpeg"
            },
            {
                Ridername: "Neel Patel",
                Riderimg: "images/men.jpg",
                Bikename: "Royal Enfield Interceptor",
                EngineCC: 650,
                bg: "images/interceptor.jpg"
            }
        ];

        let i = 0;

        const bg = document.getElementById('BGI');
        const Ridername = document.getElementById('Ridername');
        const Riderimg = document.getElementById('Riderimg');
        const Bikename = document.getElementById('Bikename');
        const EngineCC = document.getElementById('EngineCC');

        function updateSlide(index) {
            bg.style.backgroundImage = `url('${slider[index].bg}')`;
            Ridername.innerText = slider[index].Ridername;
            Riderimg.src = slider[index].Riderimg;
            Bikename.innerText = slider[index].Bikename;
            EngineCC.innerText = slider[index].EngineCC + " CC";
        }

        function next() {
            i = (i + 1) % slider.length;
            updateSlide(i);
        }

        function prev() {
            i = (i - 1 + slider.length) % slider.length;
            updateSlide(i);
        }

        
        updateSlide(i);