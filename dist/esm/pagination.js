import './chunk-851d1b8f.js';
import './helpers.js';
import './chunk-e92e3389.js';
import './chunk-47947dce.js';
import { r as registerComponent, u as use } from './chunk-cca88db8.js';
import { P as Pagination, a as PaginationButton } from './chunk-b97fd1e9.js';
export { P as BPagination, a as BPaginationButton } from './chunk-b97fd1e9.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Pagination);
    registerComponent(Vue, PaginationButton);
  }
};
use(Plugin);

export default Plugin;
