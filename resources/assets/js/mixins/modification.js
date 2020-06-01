export default{
    data(){
        return{
            editing:false
        }
    },

    methods:{
        edit(){
            this.setEditCache();
            this.editing = true;
        },

        cancel(){
            this.restoreFromCache();
            this.editing = false;
        },

        setEditCache(){},
        restoreFromCache(){},

        update(){
            axios.put(this.endpoint,this.payload())
            .catch(({response})=>{
                this.$toast.error(response.data.messagem,"Error",{timeout:3000});
            })
            .then(({data})=>{
                console.log(data);
                this.bodyhtml = data.bodyhtml;
                this.$toast.success(data.message,"Success",{timeout:3000});
                this.editing = false;
            })
        },

        payload(){},

        destroy(){
            this.$toast.question('Are you sure about that?',"Confirm",{
            timeout: 20000,
            close: false,
            overlay: true,
            displayMode: 'once',
            id: 'question',
            zindex: 999,
            position: 'center',
            buttons: [
                ['<button><b>YES</b></button>', (instance, toast)=>{
                this.delete();
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                }, true],
                ['<button>NO</button>', function (instance, toast) {
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                }],
            ],
            });
        },

        delete(){},
    }
}