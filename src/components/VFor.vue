<template>
  <div>
    <h1>陣列</h1>
    <ul>
        <li v-for="(item, index) in list" :key="item.id">
        index: ${ {{index}} },
        name: ${ {{item.name}} }
        </li>
    </ul>

    <h1>物件</h1>    
    <li v-for="(item, key, index) in obj" :key="item.id">
      index: ${ {{index}} },
      key: ${ {{key}}} },
      name: ${ {{item.name}} }
    </li>

    <h1>常數</h1>
    <div>
        <span v-for="n in 10" :key="n">${ {{n}} }</span>
    </div>

    <h1>VFor 搭配 VIf</h1>
    <div>
        <span v-if="n % 2 == 1" v-for="n in 10" :key="n">${ {{n}} }</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'VFor',
  data: function() {
      return {
        list: [
            { id: '123456789', name: '選項 1' },
            { id: '234567890', name: '選項 2' },
            { id: '345678901', name: '選項 3' }
        ],
        
        obj: {
            '123456789': { name: '選項 1' },
            '234567890': { name: '選項 2' },
            '345678901': { name: '選項 3' }
        }
      }
  },
}
</script>

