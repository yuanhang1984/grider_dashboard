"use strict";

class Spot {
  /**
   * 构造函数
   */
  constructor() {
  }

  /**
   * 生成代码
   */
  generateCode() {
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]容器。
    ////////////////////////////////////////////////////////////////////////////
    this.container = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]页头。
    ////////////////////////////////////////////////////////////////////////////
    this.pageHeader = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]logo。
    ////////////////////////////////////////////////////////////////////////////
    this.logo = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]统计区域。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsArea = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]统计面板。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsPanel = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]统计表格。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsTable = new JSControl("table");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]用户列表区域。
    ////////////////////////////////////////////////////////////////////////////
    this.userListArea = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]页脚。
    ////////////////////////////////////////////////////////////////////////////
    this.pageFooter = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]容器。
    ////////////////////////////////////////////////////////////////////////////
    this.container.setAttribute(
      {
        "class": "container"
      }
    );
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]页头。
    ////////////////////////////////////////////////////////////////////////////
    this.pageHeader.setAttribute(
      {
        "class": "page_header"
      }
    );
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]logo。
    ////////////////////////////////////////////////////////////////////////////
    this.logo.setAttribute(
      {
        "class": "logo"
      }
    );
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]统计区域。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsArea.setAttribute(
      {
        "class": "statistics_area"
      }
    );
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]统计面板。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsPanel.setAttribute(
      {
        "class": "statistics_panel"
      }
    );
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]统计表格。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsTable.setAttribute(
      {
        "class": "statistics_table"
      }
    );
    let lossTotal = 0;
    let profitTotal = 0;
    for (let i = 0; i < dataSource.account_list.length; i++) {
      let account = dataSource.account_list[i];
      lossTotal += account.untrade_sell_order_loss_total;
      profitTotal += account.trade_sell_order_profit_total;
    }
    lossTotal = lossTotal.toFixed(4);
    profitTotal = profitTotal.toFixed(4);
    this.statisticsTable.setContent(`
      <thead>
        <tr>
          <td colspan = "3">Grider</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class = "account_count">${dataSource.account_list.length}</td><td class = "profit_total">${profitTotal}</td><td class = "loss_total">${lossTotal}</td>
        </tr>
        <tr>
          <td class = "account_count">用户数</td><td class = "profit_total">总浮盈</td><td class = "loss_total">总浮亏</td>
        </tr>
      </tbody>
    `);
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]用户列表区域。
    ////////////////////////////////////////////////////////////////////////////
    this.userListArea.setAttribute(
      {
        "class": "user_list_area"
      }
    );
    let userListTableCode = "";
    for (let i = 0; i < dataSource.account_list.length; i++) {
      let account = dataSource.account_list[i];
      let lastUpdateDatetime = account.profit_loss_record[account.profit_loss_record.length - 1].datetime;
      lastUpdateDatetime = lastUpdateDatetime.substring(5);
      userListTableCode += `
        <table class = "user_list_table">
          <thead>
            <tr>
              <td>${account.account_name}</td><td>${lastUpdateDatetime}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>浮盈</td><td>$&nbsp;${account.trade_sell_order_profit_total}</td>
            </tr>
            <tr>
              <td>浮亏</td><td>$&nbsp;${account.untrade_sell_order_loss_total.toFixed(4)}</td>
            </tr>
            <tr>
              <td>订单交易金额</td><td>$&nbsp;${account.order_trade_fund}</td>
            </tr>
            <tr>
              <td>账户资产总额</td><td>$&nbsp;${account.account_asset_total.toFixed(4)}</td>
            </tr>
            <tr>
              <td>账户资产可用额度</td><td>$&nbsp;${account.account_asset_free.toFixed(4)}</td>
            </tr>
            <tr>
              <td>账户资产冻结额度</td><td>$&nbsp;${account.account_asset_locked.toFixed(4)}</td>
            </tr>
            <tr>
              <td>账户资产已用额度</td><td>$&nbsp;${account.account_asset_used.toFixed(4)}</td>
            </tr>
            <tr>
              <td>已交易买单数量</td><td>${account.trade_buy_order_count}&nbsp;个</td>
            </tr>
            <tr>
              <td>已交易卖单数量</td><td>${account.trade_sell_order_count}&nbsp;个</td>
            </tr>
            <tr>
              <td>非正常撤单数量</td><td>${account.cancel_abnormal_count}&nbsp;个</td>
            </tr>
            <tr>
              <td>最新已交易买单交易时间</td><td>${account.last_trade_buy_order_trade_datetime}</td>
            </tr>
            <tr>
              <td>最新已交易卖单交易时间</td><td>${account.last_trade_sell_order_trade_datetime}</td>
            </tr>
          </tbody>
        </table>
        <div id = "profit_chart_${account.account_name}" class = "profit_chart"></div>
      `;
    }
    this.userListArea.setContent(userListTableCode);
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]页脚。
    ////////////////////////////////////////////////////////////////////////////
    this.pageFooter.setAttribute(
      {
        "class": "page_footer"
      }
    );
    this.pageFooter.setContent(`©${new Date().getFullYear()}&nbsp;Grider`);
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]容器。
    ////////////////////////////////////////////////////////////////////////////
    this.container.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]页头。
    ////////////////////////////////////////////////////////////////////////////
    this.pageHeader.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]logo。
    ////////////////////////////////////////////////////////////////////////////
    this.logo.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]统计区域。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsArea.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]统计面板。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsPanel.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]统计表格。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsTable.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]用户列表区域。
    ////////////////////////////////////////////////////////////////////////////
    this.userListArea.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]页脚。
    ////////////////////////////////////////////////////////////////////////////
    this.pageFooter.generateCode();
  }

  /**
   * 初始化视图
   */
  initView() {
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]页面添加容器。
    ////////////////////////////////////////////////////////////////////////////
    $("body").html(this.container.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]容器添加页头。
    ////////////////////////////////////////////////////////////////////////////
    this.container.getObject().append(this.pageHeader.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]容器添加logo。
    ////////////////////////////////////////////////////////////////////////////
    this.container.getObject().append(this.logo.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]容器添加统计区域。
    ////////////////////////////////////////////////////////////////////////////
    this.container.getObject().append(this.statisticsArea.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]统计区域添加统计面板。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsArea.getObject().append(this.statisticsPanel.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]统计面板添加统计表格。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsPanel.getObject().append(this.statisticsTable.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]容器添加用户列表区域。
    ////////////////////////////////////////////////////////////////////////////
    this.container.getObject().append(this.userListArea.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]容器添加页脚。
    ////////////////////////////////////////////////////////////////////////////
    this.container.getObject().append(this.pageFooter.getCode());
  }

  /**
   * 初始化布局
   */
  initLayout() {
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]设置logo的绝对位置。
    ////////////////////////////////////////////////////////////////////////////
    let pageHeaderWidth = this.pageHeader.getObject().get(0).getBoundingClientRect().width;
    let pageHeaderHeight = this.pageHeader.getObject().get(0).getBoundingClientRect().height;
    let logoWidth = this.logo.getObject().get(0).getBoundingClientRect().width;
    let logoHeight = this.logo.getObject().get(0).getBoundingClientRect().height;
    let logoTop = pageHeaderHeight - logoHeight + (logoHeight / 2);
    let logoLeft = (pageHeaderWidth - logoWidth) / 2;
    this.logo.getObject().css("top", logoTop + "px");
    this.logo.getObject().css("left", logoLeft + "px");
  }

  /**
   * 初始化事件
   */
  initEvent() {
    for (let i = 0; i < dataSource.account_list.length; i++) {
      let account = dataSource.account_list[i];
      let profitRecord = new Array();
      let lossRecord = new Array();
      let datetimeRecord = new Array();
      for (let j = 0; j < account.profit_loss_record.length; j++) {
        let record = account.profit_loss_record[j];
        profitRecord.push(record.profit_value);
        lossRecord.push(record.loss_value);
        datetimeRecord.push(record.datetime);
      }
      let option = {
        color: [
          "#80a8ff", // 浮盈颜色
          "#f7c3a7" // 浮亏颜色
        ],
        backgroundColor: "#f5f5f5",
        tooltip: {
          trigger: "axis"
        },
        grid: {
          top: "6%",
          right: "2%",
          bottom: "0%",
          left: "1%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          show: false,
          data: datetimeRecord
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "已交易卖单盈利交易记录",
            type: "line",
            data: profitRecord
          },
          {
            name: "未交易卖单亏损交易记录",
            type: "line",
            data: lossRecord
          }
        ]
      };
      let profitChartObj = echarts.init(document.getElementById("profit_chart_" + account.account_name));
      profitChartObj.setOption(option);
    }
  }
}
