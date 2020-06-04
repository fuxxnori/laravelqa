import Prism from "prismjs";

export default{
    methods:{
        highlight(){
            const el = this.$refs.bodyhtml;
            console.log("el",el);
            if(el) Prism.highlightAllUnder(el);
        }
    }
}