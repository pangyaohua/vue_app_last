<template>

	<div class="message">
      <div v-for="message in messageList">
        <router-link :to="`/msg/item/${message.title}`">
        <dl :class="message.className">
        <!-- @click="$store.commit('setSecondItem',true)"-->
          <dt>
            <img v-bind:src="message.imgSrc" alt="" />
          </dt>
          <dd>
            <p>
              {{message.title}}
              <span>{{message.time}}</span>
            </p>
            <p>
              {{message.content}}
            </p>
          </dd>

        </dl>
        </router-link>
      </div>
	</div>
</template>

<script>
	export default{
		mixins:[window.mixin],
		"name":"message",
		data(){
			return{
				pageName:"消息",
				messageList:this.$store.state.messageList
			}
		},
		methods:{

		},
		computed:{

		}
	}
</script>

<style>
</style>
