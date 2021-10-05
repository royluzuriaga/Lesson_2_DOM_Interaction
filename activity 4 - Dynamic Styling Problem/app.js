const app = Vue.createApp({    
    data() {
        return {  
            user: '',
            user1: false,
            user2: false,
            active: true,
            color: '',
            keyColor: '',

           
        };        
    },
    methods: {
        getInput(event){
            this.user = event.target.value;

            if(this.user === 'user1'){
                this.user1 = !this.user1;
            }else if(this.user ==='user2'){
                this.user2 = !this.user2;
            }else{
                this.user1 = ''
                this.user2 = ''
                
            }
        },
        toggleParagraph(){
            this.active = !this.active;
        },

        PickColor(event){
            this.color = event.target.value;
            if(this.color === 'red'){
                this.keyColor = this.color;
            }else if(this.color === 'blue'){
                this.keyColor = this.color
            }else if(this.color === 'black'){
                this.keyColor = this.color;
            }else{
                this.keyColor = ''
            }
        }
    }
    
});
app.mount('#assignment');