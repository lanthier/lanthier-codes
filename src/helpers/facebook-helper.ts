class FacebookHelper {
  private static _instance?: FacebookHelper

  static get instance () {
    return this._instance || (this._instance = new this())
  }

  public generateLink () {
    return 'yes'
  }
}

const facebookHelper = FacebookHelper.instance

export { facebookHelper as FacebookHelper }
