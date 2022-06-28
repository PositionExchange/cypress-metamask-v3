const settingsPage = '.settings-page';
const advancedButton = `${settingsPage} button:nth-child(2)`;
const networksButton = `${settingsPage} button:nth-child(6)`;
const closeButton = `${settingsPage} .settings-page__close-button`;
module.exports.settingsPageElements = {
  settingsPage,
  advancedButton,
  networksButton,
  closeButton,
};

const customNonceToggleOn =
  '[data-testid="advanced-setting-custom-nonce"] .toggle-button--on input';
const customNonceToggleOff =
  '[data-testid="advanced-setting-custom-nonce"] .toggle-button--off input';
const resetAccountButton =
  '[data-testid="advanced-setting-reset-account"] button';
module.exports.advancedPageElements = {
  customNonceToggleOn,
  customNonceToggleOff,
  resetAccountButton,
};

const nevermindButton = '.modal-container button:nth-child(1)';
const resetButton = '.modal-container button:nth-child(2)';
module.exports.resetAccountModalElements = {
  nevermindButton,
  resetButton,
};

const addNetworkButton = '.networks-tab__body button';
module.exports.networksPageElements = { addNetworkButton };

const networkNameInput = 'div.networks-tab__add-network-form-body > div:nth-child(1) > label > input';
const rpcUrlInput = 'div.networks-tab__add-network-form-body > div:nth-child(2) > label > input';
const chainIdInput = 'div.networks-tab__add-network-form-body > div:nth-child(3) > label > input';
const symbolInput = 'div.networks-tab__add-network-form-body > div:nth-child(4) > label > input';
const blockExplorerInput = 'div.networks-tab__add-network-form-body > div:nth-child(5) > label > input';
const saveButton = 'div.networks-tab__add-network-form-footer > button.button.btn--rounded.btn-primary';
module.exports.addNetworkPageElements = {
  networkNameInput,
  rpcUrlInput,
  chainIdInput,
  symbolInput,
  blockExplorerInput,
  saveButton,
};
