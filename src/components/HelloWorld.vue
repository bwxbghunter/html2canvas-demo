<template>
  <div class="hello">
      <div class="operation-btn">
        <el-button type="primary" @click="downloadImage">下载图片</el-button>
      </div>
      <div class="content">
        <ImageDom id="imageDom" />
      </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import ImageDom from './ImageDom.vue';
export default {
    name: 'HelloWorld',
    components: { ImageDom },
    methods: {
        downloadImage() {
            this.$nextTick(async () => {
                const element = document.getElementById('imageDom');
                const canvas = await html2canvas(element, {
                    useCORS: true,
                    // allowTaint: true,
                    scale: 4
                });
                const dataUrl = canvas.toDataURL();
                this.downloadFile(`下载.png`, dataUrl);
            });
        },
        downloadFile(name, code) {
            const aLink = document.createElement('a');
            aLink.download = name;
            aLink.href = code;
            aLink.click();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.operation-btn {
  margin: 16px;
  text-align: left;
}
.content {
  width: 100%;
  height: 400px;
  overflow: auto;
  margin: auto;
  display: flex;
  justify-content: center;
}
</style>
