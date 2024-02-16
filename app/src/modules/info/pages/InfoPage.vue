<template>
    <div class="info-box">
        <InfoTitle />
        <InfoContent />
    </div>
</template>
<script>
import InfoTitle from "../components/TitleComponent.vue";
import InfoContent from "../components/ContentComponent.vue";

export default {
    components: {
        InfoTitle,
        InfoContent
    }
}
</script>
<style src="../assets/info.scss" scoped></style>