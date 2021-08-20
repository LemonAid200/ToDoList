Vue.createApp({
    data(){
        return{
            valueInput: '',
            needDoList: [],
            newOrDone: true,

        };
    },
    methods:{
        handlyInput(event){
            this.valueInput = event.target.value;
        },
        addTask(){
             if(this.valueInput === '') {return};            
            this.needDoList.push({
                title: this.valueInput,
                id: Math.random(),
                status: false
            });
            this.valueInput = '';
            this.saveListToStorage()
        },

        saveListToStorage(){
            const parsed = JSON.stringify(this.needDoList);
            localStorage.setItem('needDoList', parsed);

        },
        

        newPressed(){
            this.newOrDone = true;
            console.log(this.newOrDone)
        },
        
        donePressed(){
            this.newOrDone = false;
            console.log(this.newOrDone)
        },

        doCheck(title, type){
            index = this.needDoList.indexOf(title);
            if(type === 'need'){
                this.needDoList[index].status = true
            }
            else{
                this.needDoList[index].status = false
            }
            this.saveListToStorage()
        },
    },
    mounted(){
        if (localStorage.getItem('needDoList')) {
            try {
              this.needDoList = JSON.parse(localStorage.getItem('needDoList'));
            } catch(e) {
              localStorage.removeItem('needDoList');
            }
        };
    }

}).mount('#app')
