Vue.config.devtools = true

const questions = [
  {
    selector: '.nav',
    proposal: '.nav',
    answer: 'yes'
  },
  {
    selector: 'nav',
    proposal: '.nav',
    answer: 'no'
  },
  {
    selector: '#main-nav',
    proposal: '#main-nav',
    answer: 'yes'
  },
  {
    selector: '.box-warning + .box',
    proposal: '.box-warning ~ .box',
    answer: 'no'
  },
  {
    selector: '.navbar',
    proposal: '.navbar-nav',
    answer: 'no'
  },
  {
    selector: '.box-warning ~ .box-primary',
    proposal: '.box-warning ~ .box-primary',
    answer: 'yes'
  },
  {
    selector: '.box-warning ~ .box',
    proposal: '.box-warning ~ .box',
    answer: 'yes'
  },
  {
    selector: '#info',
    proposal: '[id="info"]',
    answer: 'yes'
  },
  {
    selector: '#info ~ .box',
    proposal: '#info + .box',
    answer: 'no'
  },
  {
    selector: 'ul:not(.navbar-right)',
    proposal: 'ul:not(.navbar-right)',
    answer: 'yes'
  },
  {
    selector: 'section div:first-of-type',
    proposal: 'section div:first-child',
    answer: 'no'
  },
  {
    selector: 'section div:first-of-type',
    proposal: 'section div:first-of-type',
    answer: 'yes'
  },
  {
    selector: 'section > *',
    proposal: 'section *',
    answer: 'no'
  },
  {
    selector: 'section > *',
    proposal: 'section > *',
    answer: 'yes'
  },
  {
    selector: 'header + section',
    proposal: 'header + section',
    answer: 'yes'
  },
  {
    selector: 'header > nav',
    proposal: 'header > nav',
    answer: 'yes'
  },
  {
    selector: '.content .shiny-input-container',
    proposal: '.content .shiny-input-container',
    answer: 'yes'
  },
  {
    selector: '.box > div',
    proposal: '.box .box-body',
    answer: 'no'
  },
  {
    selector: '.box > .box-body',
    proposal: '.box > .box-body',
    answer: 'yes'
  },
  {
    selector: 'ul > li',
    proposal: 'ul > :nth-child(2)',
    answer: 'no'
  },
  {
    selector: 'ul > :nth-child(2)',
    proposal: 'ul > :nth-child(2)',
    answer: 'yes'
  },
  {
    selector: 'ul li:first-child',
    proposal: 'ul li:first-child',
    answer: 'yes'
  },
  // {
  //   selector: '.content > :nth-child(2n+1)',
  //   proposal: '.content > :nth-child(2n+1)',
  //   answer: 'yes'
  // },
  {
    selector: ':empty',
    proposal: ':empty',
    answer: 'yes'
  },
  {
    selector: '[class*="navbar"]',
    proposal: '[class*="navbar"]',
    answer: 'yes'
  },
  {
    selector: '[class*="box"]',
    proposal: '.box',
    answer: 'no'
  },
  {
    selector: '[class*="box"]',
    proposal: '[class*="box"]',
    answer: 'yes'
  },
  {
    selector: '.form-group > *',
    proposal: '.form-group > label',
    answer: 'no'
  },
  {
    selector: '#map, #location',
    proposal: '#map, #location',
    answer: 'yes'
  },
  {
    selector: '.box.box-warning',
    proposal: '.box.box-warning',
    answer: 'yes'
  },
  {
    selector: 'label',
    proposal: '[for="user-name"]',
    answer: 'yes'
  }
  // {
  //   selector: '[class^="nav"]',
  //   proposal: '[class^="navbar"]',
  //   answer: 'no'
  // }
]

Vue.component('question', {
  props: ['v', 'q', 'disabled', 'correct'],
  data () {
    return {
      answer: '',
      a: []
    }
  },
  computed: {
    checked: {
      get () {
        return this.v
      },
      set (val) {
        this.a = val
      }
    },
    displaySelector () {
      return `${this.q} {…}`
    }
  },
  template: `<div>
<pre class="code">{{displaySelector}}</pre>
<div :class="['label-ctnr', disabled ? 'disabled': '']"><label :class="[ feedbackClass(item), checkedClass(item)]" v-for="(item, i) in ['yes', 'no']">
<span v-if="disabled && isChecked(item)">
<svg v-if="isCorrectChecked(item)" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
  <polyline class="path check" fill="none" stroke="#1698d0" stroke-width="20" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
</svg>
<svg v-else version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
  <line class="path line" fill="none" stroke="#ff7058" stroke-width="20" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
  <line class="path line" fill="none" stroke="#ff7058" stroke-width="20" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
</svg>
</span>
<input @change="answerChecked" type="radio" :id="item" :value="item" v-model="checked" :disabled="disabled"/>{{item}}</label></div>

<button v-if="answer" type="button" @click="submitAnswer">Answer</button>
</div>`,
  methods: {
    answerChecked () {
      this.$emit('answered', this.a)
    },
    checkedClass (item) {
      return this.isChecked(item) ? 'checked' : 'not-checked'
    },
    isChecked (item) {
      return item === this.checked
    },
    isCorrectChecked (item) {
      return item === this.checked && item === this.correct
    },
    feedbackClass (item) {
      if (!this.disabled) {
        return
      }
      return item === this.correct ? 'correct' : 'wrong'
    }
  }
}
)

Vue.component('v-style', {
  render: function (createElement) {
    return createElement('style', this.$slots.default)
  }
})

Vue.component('finalresults', {
  props: ['finalpercentage'],
  template: '#finalresults'
})

Vue.component('pagedoc', {
  template: '#page-doc',
  data () {
    return {}
  }
})

new Vue({
  el: '#app',
  data () {
    return {
      currentIndex: 0,
      checkedAnswers: [],
      v: [],
      score: 0,
      questions: [],
      isIdle: true,
      askedForResults: false
    }
  },
  computed: {
    total () {
      return this.questions.length
    },
    finalPercentage () {
      return `${Math.round(this.score / this.total * 100)}%`
    },
    proposal () {
      return this.questions[this.currentIndex].proposal
    },
    selector () {
      return this.questions[this.currentIndex].selector
    },
    answer () {
      return this.questions[this.currentIndex].answer
    },
    isAnswered () {
      return this.v.length !== 0
    },
    disabled () {
      return this.v.length !== 0
    },
    isFinished () {
      return this.currentIndex === this.total - 1
    },
    shouldShowNext () {
      return this.isAnswered && !this.isFinished
    },
    allDone () {
      return this.isAnswered && this.isFinished
    }
  },
  methods: {
    start () {
      const firstQuestion = questions.slice(0, 1)
      this.questions = [
        ...firstQuestion,
        ...questions.slice(1)
          .sort(function (a, b) { return 0.5 - Math.random() })
      ]
      this.isIdle = false
    },
    go (r) {
      this.v = r
      if (this.checkAnswer(r)) {
        this.score++
      }
      this.disabled = true
      this.isAnswered = true
    },
    checkAnswer (r) {
      return r === this.questions[this.currentIndex].answer
    },
    resetStep () {
      this.isAnswered = false
      this.disabled = false
      this.v = []
    },
    displayNext () {
      this.currentIndex++
      this.resetStep()
    },
    playAgain () {
      this.score = 0
      this.start()
      this.currentIndex = 0
      this.askedForResults = false
      this.resetStep()
    },
    showResults () {
      this.askedForResults = true
      this.isIdle = true
    }
  }
})
