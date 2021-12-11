<template>
  <div id="app">
    <ant-inline-search :option="option">
      <span>内联查询</span>
      <a-icon type="down" />
    </ant-inline-search>
  </div>
</template>
<script>
// import moment from 'moment';

export default {
  data() {
    const columns = [
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
        title: "colum5",
        dataIndex: "colum5",
        width: 100,
        fixed: "right",
      },
    ];

    const data = [
      {
        key: 1,
        colum1: 1,
        colum2: "data1",
        colum3: false,
        colum4: "2021-12-12",
        colum5: 1000,
      },
    ];
    let selectedRowKeys = [];
    let option = {
      scroll: { x: 500, y: 400 },
      columns,
      data,
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
          disabledDate: (current) => {
            // return current && current < moment().endOf("day");
            return current;
          },
        },
      ],
      rowSelection: {
        selectedRowKeys,
        onChange: (changeSelectedRowKeys) => {
          // 不改变引用地址 替换数组内部数据
          selectedRowKeys.splice(0);
          selectedRowKeys.push(...changeSelectedRowKeys);
        },
      },
      onSearch: () => {
        console.log("option :>> ", option);
        option.data = [
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
      },
      onCallback: () => {
        const selectedKeys = option.rowSelection.selectedRowKeys;
        let result = option.data.filter((item) =>
          selectedKeys.includes(item.key)
        );
        console.log("result :>> ", result);
        console.log("option :>> ", option);
      },
    };
    // S自定义筛选项
    let customFilterOption = {
      key: "colum5",
      label: "label5：",
      type: "vnode",
    };
    customFilterOption.vnode = (
      <a-input-number
        default-value={option.filter[customFilterOption.key]}
        formatter={(value) =>
          `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
        parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
        onChange={(event) => {
          option.filter[customFilterOption.key] = event;
        }}
      />
    );
    option.filterOptions.push(customFilterOption);
    // E 自定义筛选项
    return {
      option,
    };
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 20px;
}
</style>
