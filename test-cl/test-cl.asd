;;;; 2013-01-10 10:37:11

(defpackage #:test-cl-asd
  (:use :cl :asdf))

(in-package :test-cl-asd)

(defsystem test-cl
  :name "test-cl"
  :version "0.1"
  :components ((:file "defpackage")
               (:file "main" :depends-on ("defpackage")))
  :depends-on ())
