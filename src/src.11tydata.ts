import { enhance11tydata } from './util/i18n';

module.exports = () => {
  // Use Arabic as the root page locale
  return enhance11tydata({}, 'ar', 'rtl');
};
