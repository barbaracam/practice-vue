<template>
    <li>
        <!-- <h2>{{ fullName }} {{friendIsFavorite ?'(Favorite)' : ''}}</h2>  below change as we are sending the information with app.vue, no from here anymore-->
        <h2>{{ fullName }} {{isFavorite ?'(Favorite)' : ''}}</h2>
        <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
        <button @click="toggleFavorite()">Toggle Favorite</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{phoneNumber}}</li>
            <li><strong>Email:</strong> {{emailAddress}}</li>
        </ul>
        <button @click="deleteFriend">Delete</button>
    </li>


</template>

<script>
export default {
   
        // props need to be camel case
        // props: ['fullName','phoneNumber','emailAddress','isFavorite' ],
    props: { 
        //props you define which props this component receives   
                id:{type:String, required: true},
                fullName: {type : String, required: true},
                phoneNumber: {type: String, required: true},
                emailAddress: {type: String, required: true},
                isFavorite: {type: Boolean, required: false, default:false, 
                            // validator: function(value){ return value === '1' || value=== '0'}
                            }
            },
    emits:['toggle-favorite', 'delete'],
        //{
        // counterparts of props, which custom events your component at some point emit
        // 'toggle-favorite': function(id){
        //     if(id){
        //         return true;
        //     } else {
        //         console.warn('id is missing')
        //         return false;
        //     }
        // }
        //},                      
    data(){
        return {
            detailsAreVisible: false,
            friend:
                {   
                    // id: 'Mary',
                    // name: ' Mary Gomez',
                    // phone:'905-568-5858',
                    // email:'mama@google.ca'
                },
            // friendIsFavorite: this.isFavorite 
        };
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            //before bolean
            // if(this.friendIsFavorite === "1"){
            //     this.friendIsFavorite = "0"
            // } else {
            //     this.friendIsFavorite = "1"
            // }
            //after bolean
            // this.friendIsFavorite = !this.friendIsFavorite;
            this.$emit('toggle-favorite', this.id );
        },
        deleteFriend(){
            this.$emit('delete', this.id)
        }
        
    }
};
</script>

