webpackJsonp([11],{903:function(a,e,s){"use strict";a.exports=function(a){if(a&&a.length)for(var e=0;e<a.length;e++){var s,r=a[e];switch(r.keyword){case"$ref":s="can\\'t resolve reference "+r.params.ref;break;case"additionalItems":s="";var t=r.params.limit;s+="should not have more than "+t+" item",1!=t&&(s+="s");break;case"additionalProperties":s="should not have additional properties";break;case"anyOf":s='should match some schema in "anyOf"';break;case"constant":s="should be equal to constant";break;case"contains":s="should contain a valid item";break;case"custom":s='should pass "'+r.keyword+'" keyword validation';break;case"dependencies":s="";var t=r.params.depsCount;s+="should have propert",s+=1==t?"y":"ies",s+=" "+r.params.deps+" when property "+r.params.property+" is present";break;case"enum":s="should be equal to one of predefined values";break;case"format":s='should match format "'+r.params.format+'"';break;case"formatExclusiveMaximum":s="formatExclusiveMaximum should be boolean";break;case"formatExclusiveMinimum":s="formatExclusiveMinimum should be boolean";break;case"formatMaximum":case"formatMinimum":case"maximum":s="";var o=r.params.comparison+" "+r.params.limit;s+="should be "+o;break;case"maxItems":s="";var t=r.params.limit;s+="should not have more than "+t+" item",1!=t&&(s+="s");break;case"maxLength":s="";var t=r.params.limit;s+="should not be longer than "+t+" character",1!=t&&(s+="s");break;case"maxProperties":s="";var t=r.params.limit;s+="should not have more than "+t+" propert",s+=1==t?"y":"ies";break;case"minimum":s="";var o=r.params.comparison+" "+r.params.limit;s+="should be "+o;break;case"minItems":s="";var t=r.params.limit;s+="should not have less than "+t+" item",1!=t&&(s+="s");break;case"minLength":s="";var t=r.params.limit;s+="should not be shorter than "+t+" character",1!=t&&(s+="s");break;case"minProperties":s="";var t=r.params.limit;s+="should not have less than "+t+" propert",s+=1==t?"y":"ies";break;case"multipleOf":s="should be a multiple of "+r.params.multipleOf;break;case"not":s='should not be valid according to schema in "not"';break;case"oneOf":s='should match exactly one schema in "oneOf"';break;case"pattern":s='should match pattern "'+r.params.pattern+'"';break;case"patternGroups":s="";var t=r.params.limit;s+="should have "+r.params.reason+" "+t+" propert",s+=1==t?"y":"ies",s+=' matching pattern "'+r.params.pattern+'"';break;case"patternRequired":s='should have property matching pattern "'+r.params.missingPattern+'"';break;case"required":s="should have required property "+r.params.missingProperty;break;case"switch":s='should pass "switch" keyword validation, case '+r.params.caseIndex+" fails";break;case"type":s="should be "+r.params.type;break;case"uniqueItems":s="should not have duplicate items (items ## "+r.params.j+" and "+r.params.i+" are identical)";break;default:continue}r.message=s}}}});