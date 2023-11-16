const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            message: 'First vue page',
            img: 'https://fastly.picsum.photos/id/41/200/300.jpg?hmac=oimmvNf5GBZCx44LN9J4KGnDqUvSWmmUwPcLUaUMxF0'
        }
    }
};

createApp(opzioni).mount('#app')