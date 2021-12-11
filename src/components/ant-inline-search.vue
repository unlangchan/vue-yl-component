<template>
  <a-dropdown :trigger="['click']" class="ant-inline-search">
    <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
      <slot />
    </a>
    <a-row :gutter="[0, 16]" slot="overlay" class="ant-inline-search-content">
      <a-row :gutter="[16, 16]">
        <a-col
          class="filter-item"
          :span="filterOption.span || 8"
          v-for="filterOption of option.filterOptions"
          :key="filterOption.key"
        >
          <label> {{ filterOption.label }}</label>
          <!-- S 输入框 -->
          <a-input
            v-model="option.filter[filterOption.key]"
            v-if="filterOption.type === 'input'"
            :placeholder="filterOption.placeholder"
          />
          <!-- E 输入框 -->
          <!-- S 下拉框 -->
          <a-select
            v-model="option.filter[filterOption.key]"
            v-else-if="filterOption.type === 'select'"
          >
            <a-select-option
              v-for="(opt, k) of filterOption.options"
              :key="k"
              :value="opt.value"
              >{{ opt.title }}</a-select-option
            >
          </a-select>
          <!-- E 下拉框 -->
          <!-- S 单选 -->
          <a-radio-group
            v-else-if="filterOption.type === 'radio-group'"
            v-model="option.filter[filterOption.key]"
          >
            <a-radio
              v-for="(opt, k) of filterOption.options"
              :key="k"
              :value="opt.value"
              >{{ opt.title }}
            </a-radio>
          </a-radio-group>
          <!-- E 单选 -->
          <!-- S 日期时间选择框 -->
          <a-date-picker
            v-else-if="filterOption.type === 'date-picker'"
            v-model="option.filter[filterOption.key]"
            :format="filterOption.format || 'YYYY-MM-DD HH:mm:ss'"
            :valueFormat="filterOption.valueFormat || 'YYYY-MM-DD HH:mm:ss'"
            :disabled-date="filterOption.disabledDate"
          />
          <!-- E 日期时间选择框 -->
          <!-- S 自定义注入 -->
          <v-node
            v-else-if="filterOption.type === 'vnode'"
            :vnode="filterOption.vnode"
          />
          <!-- E 自定义注入 -->
        </a-col>
        <a-col :span="8" class="filter-operation">
          <a-row :gutter="16" class="filter-operation align-right">
            <a-button type="primary" @click="(e) => option.onSearch(e)"
              >搜索</a-button
            >
            <a-button type="primary">回传</a-button>
          </a-row>
        </a-col>
      </a-row>
      <a-divider style="margin: 4px 0" />
      <a-row>
        <a-table
          :columns="option.columns"
          :scroll="option.scroll || { x: 1000, y: 400 }"
          :data-source="option.data"
          :row-selection="option.rowSelection"
        >
        </a-table>
      </a-row>
    </a-row>
  </a-dropdown>
</template>
<script>
export default {
  name: "ant-inline-search",
  components: {
    VNode: {
      functional: true,
      render: (h, ctx) => ctx.props.vnode || h(null),
    },
  },
  props: ["option"],
};
</script>
<style lang="scss">
.ant-inline-search.ant-dropdown-link {
  padding: 0.5em;
}
.ant-inline-search-content {
  padding: 20px;
  width: 600px;
  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 5px;
  }
  .filter-operation {
    text-align: right;
    .ant-btn {
      margin-right: 10px;
    }
  }
  .filter-item {
    display: flex;

    & > label {
      font-size: 14px;
      font-weight: 600;
      line-height: 32px;
      text-align: right;
    }

    & > .ant-select,
    & > .ant-radio-group {
      flex: 1 1 0;
    }
    & > .ant-select {
      font-size: 16px;
    }
    & > .ant-radio-group {
      .ant-radio-wrapper {
        line-height: 2;
      }
    }
  }
}
</style>
