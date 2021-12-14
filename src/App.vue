<template>
  <div id="app">
    <ant-inline-search
      type="radio"
      :option="option"
      :search="search"
      @confirm="log"
    >
      <span>内联查询单选：</span>
      <a-input
        placeholder="Basic usage"
        disabled
        style="width: 200px; margin-right: 10px"
      >
        <a-icon slot="suffix" type="down" />
      </a-input>
    </ant-inline-search>
    <ant-inline-search
      type="checkbox"
      :option="option"
      :search="search"
      @confirm="log"
    >
      <span>内联查询多选：</span>
      <a-input
        placeholder="Basic usage"
        disabled
        style="width: 200px; margin-right: 10px"
      >
        <a-icon slot="suffix" type="down" />
      </a-input>
    </ant-inline-search>
  </div>
</template>
<script>
// import moment from 'moment';

export default {
  data() {
    let option = {
      columns: [
        {
          title: "colum1",
          dataIndex: "colum1",
        },
        {
          title: "colum2",
          dataIndex: "colum2",
        },
        {
          title: "colum3",
          dataIndex: "colum3",
        },
        {
          title: "colum4",
          dataIndex: "colum4",
        },
        {
          title: "colum4",
          dataIndex: "colum41",
        },
        {
          title: "colum4",
          dataIndex: "colum42",
        },
        {
          title: "colum4",
          dataIndex: "colum43",
        },
        {
          title: "colum5",
          dataIndex: "colum5",
          width: 100,
          fixed: "right",
        },
      ],
      filter: {
        colum1: 1,
        colum2: "data1",
        colum3: false,
        colum4: "2021-12-12",
        colum5: 1000,
      },
      filterOptions: [
        {
          key: "colum1",
          label: "label1：",
          type: "input",
        },
        {
          key: "colum2",
          label: "label2：",
          type: "select",
          options: [
            { title: "data1", value: 1 },
            { title: "data2", value: 2 },
            { title: "data3", value: 3 },
            { title: "data4", value: 4 },
          ],
        },
        {
          key: "colum3",
          label: "label3：",
          type: "radio-group",
          span: 24,
          options: [
            { title: "true", value: true },
            { title: "false", value: false },
          ],
        },
        {
          key: "colum4",
          label: "label4：",
          type: "date-picker",
          format: "YYYY-MM-DD HH:mm:ss",
          valueFormat: "YYYY-MM-DD HH:mm:ss",
        },
      ],
    };
    return {
      option,
    };
  },
  methods: {
    log(e) {
      console.log("e :>> ", e);
    },
    async search(filter) {
      // let result = await request.get(`xxx`,{params:filter});
      console.log("filter :>> ", filter);
      let result = await new Promise((resolve) => {
        const data = [
          {
            key: 1,
            colum1: 1,
            colum2: "data1",
            colum3: false,
            colum4: "2021-12-12",
            colum5: 1000,
          },
          {
            key: 2,
            colum1: 2,
            colum2: "data2",
            colum3: true,
            colum4: "2021-12-12",
            colum5: 1000,
          },
          {
            key: 3,
            colum1: 3,
            colum2: "data3",
            colum3: true,
            colum4: "2021-12-12",
            colum5: 1000,
          },
          {
            key: 4,
            colum1: 4,
            colum2: "data4",
            colum3: false,
            colum4: "2021-12-12",
            colum5: 1000,
          },
        ];
        setTimeout(() => resolve(data), 1000);
      });
      return result;
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 20px;
}
</style>
