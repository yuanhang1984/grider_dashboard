"use strict";

class Global {
  /**
   * 设置Html的font-size
   * @param baseValue 基础值（比如：设计中一个按钮的宽度是100px，那么可以假设它的
   *                  宽度是10rem，那么基础值就是10，它是一个相对换算的定义）
   * @param designWidth 设计稿宽度（比如：在Axure中设计App或小程序，一般都以750p
   *                    x的宽度设计页面，那么设计稿宽度就是750）
   */
  static setHtmlFontSize(baseValue, designWidth) {
    let htmlWidth = document.querySelector("html").getBoundingClientRect().width;
    let fontSize = baseValue * htmlWidth / designWidth;
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]这里不能用jquery中css()设置html的font-size，会出现设置与获取值
    // 不符的问题。虽然设置没有问题，但为了一致统一采用DOM的方法设置font-size。
    ////////////////////////////////////////////////////////////////////////////
    document.querySelector("html").style.fontSize = fontSize + "px";
  }

  /**
   * 获取Html的font-size
   */
  static getHtmlFontSize() {
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]这里不能用jquery中css()获取html的font-size，会出现设置与获取值
    // 不符的问题。虽然设置没有问题，但为了一致统一采用DOM的方法设置font-size。
    ////////////////////////////////////////////////////////////////////////////
    return parseInt(document.querySelector("html").style.fontSize);
  }
}
