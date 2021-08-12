Vue.createApp({
    data(){
        return{
            valueInput: '',
            needDoList: [],
            newOrDone: true

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
        }

       




    }
}).mount('#app')