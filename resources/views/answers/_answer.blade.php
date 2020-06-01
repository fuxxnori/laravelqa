<answer :answer="{{$answer}}" inline-template>
    <div class="media post">
        <vote :model="{{$answer}}" name="answer"></vote>
        {{-- modelの前にコロンをつけないとpropsには値が渡るがdataやcomputed,methodsで値を参照できない --}}
        
        <div class="media-body">
            <form v-if="editing">
                <div class="form-group">
                    <textarea rows="10" v-model="body" class="form-control" required></textarea>
                </div>
                <button class="btn btn-primary" type="button" @click.prevent="update" :disabled="isInvalid">Update</button>
                <button class="btn btn-outline-secondary" @click="cancel">Cancel</button>
            </form>
            <div v-else>
                <div v-html="bodyhtml"></div>
                <div class="row">
                    <div class="col-4">
                        <div class="ml-auto">
                            @can ("update",$answer)
                            <a @click.prevent="edit" class="btn btn-sm btn-outline-info">
                                Edit
                            </a>
                            @endcan
        
                            @can("delete",$answer)
                                <button @click="destroy" class="btn btn-sm btn-outline-danger">Delete</button>
                            @endcan
                        </div>
                    </div>
                    <div class="col-4"></div>
                    <div class="col-4">
                        <user-info :model="{{$answer}}" label="answered"></user-info>
                    </div>
                </div>
            </div>
        </div>
    </div>
</answer>