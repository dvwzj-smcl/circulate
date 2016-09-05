<template>
    <div class="row">
        <dropdown label="I am a dropdown" :large="true">
            <ul>
                <li><a href="#!">Inbox<badge>2</badge></a></li>
                <li class="divider"></li>
                <li><a href="#!">Outbox<badge new>2</badge></a></li>
            </ul>
        </dropdown>
    </div>
</template>

<script>
import dropdown from 'material-ui-vue/components/dropdown/dropdown.vue';
import badge from 'material-ui-vue/components/badges/badge.vue';
export default {
    components: {
        dropdown,
        badge
    }
}
</script>