import Vote from "../components/Vote.vue";
import UserInfo from "../components/UserInfo.vue";
import MEditor from "../components/MEditor.vue";
import highlight from "./highlight";
import destroy from "./destroy";

export default{
    mixins:[highlight,destroy],

    components:{Vote,UserInfo,MEditor},

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
            .then(()=>this.highlight());
        },

        payload(){},

        delete(){},
    }
}