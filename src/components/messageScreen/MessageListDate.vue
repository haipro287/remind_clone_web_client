<template>
  <div id="message-list-date" class="pa-0 my-2">
    <span class="pa-2 ma-0">October 20, 2020</span>
  </div>
</template>

<script>
export default {
  name: "MessageListDate",
  props: {
    date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scope>
#message-list-date {
  text-size-adjust: 100%;
  color: #282c31;
  font-size: 13px;
  line-height: 1.38;
  box-sizing: border-box;
  position: relative;
  text-align: center;
  list-style-type: none;
}

#message-list-date::before {
  content: "";
  background-color: rgba(220, 222, 226, 0.4);
  display: block;
  height: 1px;
  position: absolute;
  top: 50%;
  width: 100%;
}

#message-list-date > span {
  text-size-adjust: 100%;
  line-height: 1.38;
  text-align: center;
  list-style-type: none;
  box-sizing: border-box;
  background-color: #fff;
  color: #6b6e72;
  display: inline-block;
  font-size: 12px;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>
