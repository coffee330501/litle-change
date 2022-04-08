import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "home",
  components: {},
})
export default class extends Vue {
  public tableData;
  public folderUrl = require("@/assets/images/folder.svg");
  constructor() {
    super();
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    this.tableData = Array(20).fill(item);
  }

  public async openFolder(id: number): Promise<string> {
    console.log(id);
    console.log(process.env.VUE_APP_BASE_URL);
    console.log(this.$router);

    return "";
  }
}
