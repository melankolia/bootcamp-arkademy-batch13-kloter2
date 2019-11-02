function myBiodata(nama,umur){
    return {
        name: nama, //Parameter Pertama String
        age: umur, //Parameter Kedua Number
        address: 'Jl. R.A. Abusamah Lr.Setiakawan 1 No.3156 RT.36 RW.6, Kota Palembang', //String
        hobbies: ['Ngoding', 'Bermain Game', 'Belajar hal-hal baru yang berkaitan dengan teknologi'], 
        //Array
        is_married: false, //Boolean
        list_school: [{
            
            name: "SMAN15 Palembang",
            year_in: "2011",
            year_out: "2014",
            major: "Ilmu Pengetahuan Sosial"
            
        },{

            name: 'Sriwijaya University',
            year_in: '2014',
            year_out: '2019',
            major: 'Computer Engineering'

        }], // Array of Object
        skills: [{
          skill_name: 'Python 2/3',
          level: 'Advanced'
        },{
          skill_name: 'Javascript',
          level: 'Beginner'
        },{
          skill_name: 'Visual C#',
          level: 'Beginner' 
        }], // Array Of Object
        interestincoding: true, //Boolean
      }
}
let biodata = myBiodata('Ageng', 23);
console.log(JSON.stringify(biodata));