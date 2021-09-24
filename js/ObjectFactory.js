"use strict";

class ObjectFactory {
  /**
   * 生成uuid
   * @return uuid
   */
  static generateUuid() {
    let s = [];
    let hexDigits = "0123456789abcdef";
    for (let i = 0; i < 32; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]html的id如果不以字母开头有时会报错。
    ////////////////////////////////////////////////////////////////////////////
    s[0] = "u";
    return s.join("");
  }

  /**
   * 构造函数
   */
  constructor() {
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]对象的id。
    ////////////////////////////////////////////////////////////////////////////
    this.objectId = ObjectFactory.generateUuid();
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]对象的attribute。
    ////////////////////////////////////////////////////////////////////////////
    this.objectAttribute = "";
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]对象的content。
    ////////////////////////////////////////////////////////////////////////////
    this.objectContent = "";
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]对象的code。
    ////////////////////////////////////////////////////////////////////////////
    this.objectCode = "";
  }

  /**
   * 获取对象的id
   */
  getId() {
    return this.objectId;
  }

  /**
   * 获取对象的object
   */
  getObject() {
    return $("#" + this.getId());
  }

  /**
   * 设置对象的attribute
   * attribute的格式为json对象，其中封装了标签的属性和标签值。如：
   * {
   *   "class": "default-theme",
   *   "style": "width: 10rem; height: 20rem;"
   * }
   */
  setAttribute(attribute) {
    this.objectAttribute = attribute;
  }

  /**
   * 设置对象的content
   * @param content 内容
   */
  setContent(content) {
    this.objectContent = content;
  }

  /**
   * 获取对象的代码
   */
  getCode() {
    return this.objectCode;
  }
}
