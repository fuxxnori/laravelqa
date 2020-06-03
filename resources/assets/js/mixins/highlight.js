import Prism from "prismjs";

export default{
    methods:{
        highlight(){
            const el = this.$refs.bodyhtml;
            if(el) Prism.highlightAllUnder(el);
        }
    }
}